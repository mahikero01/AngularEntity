using AE_BusinessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json;

namespace AE_Web
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
            
        }

        [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethodAttribute()]
        public static string LanguagesSelection()
        {
            LanguageBL languageBL = new LanguageBL();
            
            string jsonData = JsonConvert.SerializeObject(languageBL.GetAllLanguages());
            languageBL = null;
            
            return jsonData;
        }
    }
}