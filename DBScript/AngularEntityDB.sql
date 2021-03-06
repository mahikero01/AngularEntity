USE [dbbtCARSAp1]
GO
/****** Object:  StoredProcedure [dbo].[AE_Language_DeleteLanguageName]    Script Date: 9/23/2016 3:16:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[AE_Language_DeleteLanguageName]
	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	DELETE FROM
		AE_Languages
	WHERE
		[LanguageName] LIKE 'J%';
END

GO
/****** Object:  StoredProcedure [dbo].[AE_Language_ReadLanguageID]    Script Date: 9/23/2016 3:16:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[AE_Language_ReadLanguageID]
	-- Add the parameters for the stored procedure here
	@LanguageName VARCHAR(20) = NULL,
	@LanguageDescr VARCHAR(30) = NULL
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    SELECT
		[LanguageID], LanguageName, LanguageDescr
	FROM
		AE_Languages
	WHERE
		[LanguageName] LIKE ISNULL(@LanguageName, [LanguageName]) + '%'
		AND [LanguageDescr] LIKE ISNULL(@LanguageDescr, [LanguageDescr]) + '%';

END

GO
/****** Object:  Table [dbo].[AE_Languages]    Script Date: 9/23/2016 3:16:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[AE_Languages](
	[LanguageID] [tinyint] IDENTITY(1,1) NOT NULL,
	[LanguageName] [varchar](20) NULL,
	[LanguageDescr] [varchar](30) NULL,
 CONSTRAINT [PK_AE_Languages] PRIMARY KEY CLUSTERED 
(
	[LanguageID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[AE_Languages] ON 

INSERT [dbo].[AE_Languages] ([LanguageID], [LanguageName], [LanguageDescr]) VALUES (1, N'C#', N'MS server side')
INSERT [dbo].[AE_Languages] ([LanguageID], [LanguageName], [LanguageDescr]) VALUES (2, N'VB', N'MS Desktop')
INSERT [dbo].[AE_Languages] ([LanguageID], [LanguageName], [LanguageDescr]) VALUES (4, N'PHP', N'Open Web')
INSERT [dbo].[AE_Languages] ([LanguageID], [LanguageName], [LanguageDescr]) VALUES (6, N'ASP', N'MS Web Page')
INSERT [dbo].[AE_Languages] ([LanguageID], [LanguageName], [LanguageDescr]) VALUES (7, N'Ruby', N'Web Japan')
INSERT [dbo].[AE_Languages] ([LanguageID], [LanguageName], [LanguageDescr]) VALUES (8, N'C/C++', N'Hardware Language')
INSERT [dbo].[AE_Languages] ([LanguageID], [LanguageName], [LanguageDescr]) VALUES (9, N'Android', N'Mobile')
SET IDENTITY_INSERT [dbo].[AE_Languages] OFF
