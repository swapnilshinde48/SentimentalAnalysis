using Aylien.TextApi;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.OleDb;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace AylientPOC
{
    public class Item
    {
        public int? SNo { get; set; }
        public string Question { get; set; }
        public string comments { get; set; }
        public string Ratings { get; set; }
        public string Dimension { get; set; }
        public string Polarity { get; set; }
        public double PolarityConfidence { get; set; }
        public string Subjectivity { get; set; }
        public double SubjectivityConfidence { get; set; }
    }
    public partial class Main : Form
    {
        Client client = new Client("0b84745f", "bceeead4da12a3b4675fe3ef96e6a172");
        int divVar = 60;
        List<Item> finalObj = new List<Item>();
        public Main()
        {
            InitializeComponent();

        }

        private void button1_Click(object sender, EventArgs e)
        {
            // var processedList = getSentimentforComment(ReadExcel());
            var processedList = ReadExcel();
            double tmpCount = Math.Ceiling(Convert.ToDouble(processedList.Count) / divVar);
            for (int i = 1; i <= tmpCount; i++)
            {
                dynamic tmplist = null;
                if (i == 1)
                    tmplist = processedList.FindAll(s => (s.SNo >= i && s.SNo <= (i * 60)));
                else
                    tmplist = processedList.FindAll(s => (s.SNo >= (((i - 1) * 60) + 1) && s.SNo <= (i * 60)));

                pushtofinalObje(getSentimentforComment(tmplist));
                pushtofinalObje(tmplist);
                Thread.Sleep(60000);
            }

            File.WriteAllText(@"D:\POC\KeywordExtractionSample\KeywordExtractionSample\bin\Debug\keywordList.txt", JsonConvert.SerializeObject(finalObj));
            var bindingList = new BindingList<Item>(finalObj);
            var source = new BindingSource(bindingList, null);
            dataGridView1.DataSource = source;
        }
        public void pushtofinalObje(List<Item> itm) {

            for (int i = 0; i < itm.Count; i++)
            {
                finalObj.Add(itm[i]);
            }


        }
        public List<Item> getSentimentforComment(List<Item> itm)
        {

            for (int i=0;i< itm.Count; i++)
            {
                Sentiment sentiment = client.Sentiment(null, text: itm[i].comments, null, null);
                
                    itm[i].Polarity = sentiment.Polarity;
                    itm[i].PolarityConfidence = sentiment.PolarityConfidence;
                    itm[i].Subjectivity = sentiment.Subjectivity;
                    itm[i].SubjectivityConfidence = sentiment.SubjectivityConfidence;
            }
            return itm;
        }
        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();//to close the window(Form1)
        }
        public List<Item> ReadExcel()
        {
            using (StreamReader r = new StreamReader(@"D:\POC\AylientPOC\AylientPOC\comments.json"))
            {
                string json = r.ReadToEnd();
                List<Item> items = JsonConvert.DeserializeObject<List<Item>>(json);
         
            return items;
            }
        }
    }
}
