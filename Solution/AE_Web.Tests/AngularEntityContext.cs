using System.Data.Entity;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Infrastructure;

namespace AE_Web.Tests
{
    public class AngularEntityContext : DbContext, IAngularEntityContext
    {
        public DbSet<AE_Languages> AE_Languages { get; set; }
        public DbSet<AE_Countries> AE_Countries { get; set; }
    }

    public class AE_Languages
    {
        public byte LanguageID { get; set; }
        public string LanguageName { get; set; }
        public string LanguageDescr { get; set; }
    }

    public class AE_Countries
    {
        public byte CountryID { get; set; }
        public string CountryName { get; set; }
        public string CountryDescr { get; set; }
    }
}