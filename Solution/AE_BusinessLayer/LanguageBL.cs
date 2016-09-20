using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AE_DataAccessLayer;
using AE_Web;

namespace AE_BusinessLayer
{
    public class LanguageBL
    {
        private LanguageDAL DAL;

        public LanguageBL()
        {
            this.DAL = new LanguageDAL();
        }

        public List<AE_Languages> GetAllLanguages()
        {
            var data = DAL.ReadLanguages();

            List<AE_Languages> languageList = new List<AE_Languages>();

            foreach (AE_Languages language in data)
            {
                languageList.Add(language);
            }

            return languageList;
        }
    }
}
