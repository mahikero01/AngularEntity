using AE_BusinessLayer;
using AE_DataAccessLayer;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AE_WebComponent
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethodAttribute()]
        public static string GetAllLanguages()
        {
            string msg = "";
            var context = new AngularEntityEntities();
            var languageBL = new LanguageBL(context);

            msg = JsonConvert.SerializeObject(languageBL.ReadAllLanguageObject());
            languageBL = null;
            context = null;

            return msg;
        }
    }
}