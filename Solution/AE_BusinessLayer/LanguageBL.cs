using AE_Web;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AE_BusinessLayer
{
    public class LanguageBL
    {
        public string message = "";

        public List<string> GetAllLanguageName()
        {
            List<string> languageList = new List<string>();

            using (var context = new AngularEntityEntities())
            {
                var languageNames = from l in context.AE_Languages
                                    select l.LanguageName;

                foreach (string languageName in languageNames)
                {
                    languageList.Add(languageName);
                }
            }

            return languageList;
        }

        public List<AE_Languages> GetAllLanguageObject()
        {
            List<AE_Languages> languageList = new List<AE_Languages>();

            using(var context = new AngularEntityEntities())
            {
                var languageObjects = from l in context.AE_Languages
                               select l;

                foreach (AE_Languages languageObject in languageObjects)
                {
                    languageList.Add(languageObject);
                }
            }

            return languageList;
        }

        public bool AddNewLanguage(AE_Languages language)
        {
            bool success = true;
            this.message = BusinessComponents.MSG_LANGUAGEBL_ADDNEWLANGUAGE_SAVEOK;

            using (var context = new AngularEntityEntities())
            {
                try
                {
                    context.AE_Languages.Add(language);
                    context.SaveChanges();
                }
                catch (Exception e)
                {
                    success = false;
                    this.message = BusinessComponents.MSG_LANGUAGEBL_ADDNEWLANGUAGE_SAVEERROR;
                }
                
            }

            return success;
        }
    }

    
}