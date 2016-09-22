using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using AE_DataAccessLayer;

namespace AE_BusinessLayer
{
    public class LanguageBL
    {
        public string message = "";

        public List<string> ReadAllLanguageName()
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

        public List<AE_Languages> ReadAllLanguageObject()
        {
            List<AE_Languages> languageList = new List<AE_Languages>();

            using (var context = new AngularEntityEntities())
            {
                var languages = from l in context.AE_Languages
                                select l;

                foreach (AE_Languages language in languages)
                {
                    languageList.Add(language);
                }
            }

            return languageList;
        }

        public bool CreateLanguage(AE_Languages language)
        {
            bool success = true;
            this.message = BusinessComponents.MSG_LANGUAGEBL_CREATELANGUAGE_SAVEOK;

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
                    this.message = BusinessComponents.MSG_LANGUAGEBL_CREATELANGUAGE_SAVEERROR;
                }
            }

            return success;
        }

        public bool UpdateLanguage(AE_Languages language)
        {
            bool success = true;
            this.message = BusinessComponents.MSG_LANGUAGEBL_UPDATELANGUAGE_SAVEOK;

            using (var context = new AngularEntityEntities())
            {
                try
                {
                    context.Entry(language).State = EntityState.Modified;
                    context.SaveChanges();
                }
                catch (Exception e)
                {
                    success = false;
                    this.message = BusinessComponents.MSG_LANGUAGEBL_UPDATELANGUAGE_SAVEERROR;
                }
            }

            return success;
        }
    }
}