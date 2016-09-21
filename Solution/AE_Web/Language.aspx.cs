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
        //[WebMethod]
        public static string LanguagesSelection()
        {
            LanguageBL languageBL = new LanguageBL();

            string jsonData = JsonConvert.SerializeObject(languageBL.GetAllLanguages());
            languageBL = null;

            return jsonData;
            //return languageBL.GetAllLanguages();
        }
    }
}