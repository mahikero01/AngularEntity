﻿using AE_BusinessLayer;
using AE_DataAccessLayer;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Web;

namespace AE_Web
{
    public partial class Language : System.Web.UI.Page
    {
        private static string userName;

        protected void Page_Load(object sender, EventArgs e)
        {
            string currentUser = Request.ServerVariables["LOGON_USER"].ToString();
            currentUser = currentUser.Remove(0, currentUser.IndexOf('\\') + 1);
            Session["currentUserName"] = currentUser;

            //Language.userName = currentUser;
            //if (Request.QueryString["fname"] != null)

            //{
            //    var rico = Request.QueryString["fname"];
            //}
        }

        [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethodAttribute()]
        public static string GetSession()
        {
            string msg = "";
            HttpContext context = HttpContext.Current;
            string namenow = (string)context.Session["currentUserName"];

            msg = JsonConvert.SerializeObject(namenow);

            return msg;
        }

        [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethodAttribute()]
        public static string ChangeSession()
        {
            string msg = "";
            HttpContext context = HttpContext.Current;
            context.Session["currentUserName"] = "wrong";
            string namenow = (string)context.Session["currentUserName"];

            msg = JsonConvert.SerializeObject(namenow);

            return msg;
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