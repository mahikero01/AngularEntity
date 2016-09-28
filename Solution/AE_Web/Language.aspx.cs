using AE_BusinessLayer;
using AE_DataAccessLayer;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace AE_Web
{
    public partial class Language : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.QueryString["fname"] != null)

            {
                var rico = Request.QueryString["fname"];
            }
        }


        [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethodAttribute()]
        public static string NewLanguageEntry(AE_Languages dataReceive)
        {
            string msg = "";
            List<string> messageList = new List<string>();
            var context = new AngularEntityEntities();
            var languageBL = new LanguageBL(context);

            if (languageBL.CreateLanguage(dataReceive.LanguageName, dataReceive.LanguageDescr))
            {
                messageList.Add("1");
                messageList.Add(languageBL._message);
            }
            else
            {
                messageList.Add("2");
                messageList.Add(languageBL._message);
            }

            msg = JsonConvert.SerializeObject(messageList);
            languageBL = null;
            context = null;
            messageList = null;

            return msg;
        }

        [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethodAttribute()]
        public static string FillUpLanguageCombo()
        {
            string msg = "";
            var context = new AngularEntityEntities();
            var languageBL = new LanguageBL(context);

            msg = JsonConvert.SerializeObject(languageBL.ReadAllLanguageName());
            languageBL = null;
            context = null;

            return msg;
        }

        [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethodAttribute()]
        public static string FillUpCompleteLanguageCombo()
        {
            string msg = "";
            var context = new AngularEntityEntities();
            var languageBL = new LanguageBL(context);

            msg = JsonConvert.SerializeObject(languageBL.ReadAllLanguageObject());
            languageBL = null;
            context = null;

            return msg;
        }

        

        [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethodAttribute()]
        public static string ModifyExistingLanguage(AE_Languages dataReceive)
        {
            string msg = "";
            List<string> messageList = new List<string>();
            var context = new AngularEntityEntities();
            var languageBL = new LanguageBL(context);

            if (languageBL.UpdateLanguage(dataReceive))
            {
                messageList.Add("1");
                messageList.Add(languageBL._message);
            }
            else
            {
                messageList.Add("2");
                messageList.Add(languageBL._message);
            }

            msg = JsonConvert.SerializeObject(messageList);
            languageBL = null;
            context = null;
            messageList = null;

            return msg;
        }

        [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethodAttribute()]
        public static string GetLanguageIDList(string dataReceive)
        {
            string msg = "";
            var context = new AngularEntityEntities();
            var languageBL = new LanguageBL(context);

            msg = JsonConvert.SerializeObject(languageBL.STReadLanguageID(dataReceive, ""));
            languageBL = null;
            context = null;

            return msg;
        }

        [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethodAttribute()]
        public static string RemoveLanguageNameStartWithJ()
        {
            string msg = "";
            List<string> messageList = new List<string>();
            var context = new AngularEntityEntities();
            var languageBL = new LanguageBL(context);

            if (languageBL.STDeleteLangauageNameJ())
            {
                messageList.Add("1");
                messageList.Add(languageBL._message);
            }
            else
            {
                messageList.Add("2");
                messageList.Add(languageBL._message);
            }

            msg = JsonConvert.SerializeObject(messageList);
            languageBL = null;
            context = null;
            messageList = null;

            return msg;
        }
    }
}