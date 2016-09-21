using AE_BusinessLayer;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AE_Web
{
    public partial class Language : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethodAttribute()]
        public static string FillUpLanguageCombo()
        {
            string msg = "";
            LanguageBL languageBL = new LanguageBL();

            msg = JsonConvert.SerializeObject(languageBL.GetAllLanguageName());
            languageBL = null;

            return msg;
        }

        [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethodAttribute()]
        public static string FillUpCompleteLanguageCombo()
        {
            string msg = "";
            LanguageBL languageBL = new LanguageBL();

            msg = JsonConvert.SerializeObject(languageBL.GetAllLanguageObject());
            languageBL = null;

            return msg;
        }

        [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethodAttribute()]
        public static string NewLanguageEntry(AE_Languages language)
        {
            string msg = "";
            List<string> messageList = new List<string>();
            LanguageBL languageBL = new LanguageBL();

            if (languageBL.AddNewLanguage(language))
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
    }
}