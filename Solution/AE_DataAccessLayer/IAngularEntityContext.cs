using System.Data.Entity;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Infrastructure;

namespace AE_DataAccessLayer
{
    public interface IAngularEntityContext
    {
        DbSet<AE_Languages> AE_Languages { get; }

        ObjectResult<AE_Languages> AE_Language_ReadLanguageID(string languageName, string languageDescr);
        int AE_Language_DeleteLanguageName();

        int SaveChanges();
        DbEntityEntry Entry(object entity);
    }
}