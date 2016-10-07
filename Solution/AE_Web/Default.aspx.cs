using AE_BusinessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json;
using System.Web.Services;

namespace AE_Web
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //var test = new LanguageBL();
            //test.STReadLanguageID("P","");
            //test.STDeleteLangauageNameJ();
            string currentUser = Request.ServerVariables["LOGON_USER"].ToString();
            currentUser = currentUser.Remove(0, currentUser.IndexOf('\\') + 1);
            Session["currentUserName"] = currentUser;
        }

        
    }
}