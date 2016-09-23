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
        public static string FillUpLanguageCombo()
        {
            string msg = "";
            LanguageBL languageBL = new LanguageBL();

            msg = JsonConvert.SerializeObject(languageBL.ReadAllLanguageName());
            languageBL = null;

            return msg;
        }

        [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethodAttribute()]
        public static string FillUpCompleteLanguageCombo()
        {
            string msg = "";
            LanguageBL languageBL = new LanguageBL();

            msg = JsonConvert.SerializeObject(languageBL.ReadAllLanguageObject());
            languageBL = null;

            return msg;
        }

        [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethodAttribute()]
        public static string NewLanguageEntry(AE_Languages language)
        {
            string msg = "";
            List<string> messageList = new List<string>();
            LanguageBL languageBL = new LanguageBL();

            if (languageBL.CreateLanguage(language))
            {
                messageList.Add("1");
                messageList.Add(languageBL.message);
            }
            else
            {
                messageList.Add("2");
                messageList.Add(languageBL.message);
            }

            msg = JsonConvert.SerializeObject(messageList);
            languageBL = null;
            messageList = null;

            return msg;
        }

        [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethodAttribute()]
        public static string ModifyExistingLanguage(AE_Languages language)
        {
            string msg = "";
            List<string> messageList = new List<string>();
            LanguageBL languageBL = new LanguageBL();

            if (languageBL.UpdateLanguage(language))
            {
                messageList.Add("1");
                messageList.Add(languageBL.message);
            }
            else
            {
                messageList.Add("2");
                messageList.Add(languageBL.message);
            }

            msg = JsonConvert.SerializeObject(messageList);
            languageBL = null;
            messageList = null;

            return msg;
        }

        [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethodAttribute()]
        public static string GetLanguageIDList(string languageName)
        {
            string msg = "";

            LanguageBL languageBL = new LanguageBL();

            msg = JsonConvert.SerializeObject(languageBL.STReadLanguageID(languageName, ""));
            languageBL = null;

            return msg;
        }
    }
}