USE [dbbtCARSAp1]
GO
/****** Object:  Table [dbo].[AE_Languages]    Script Date: 9/20/2016 3:08:06 PM ******/
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
INSERT [dbo].[AE_Languages] ([LanguageID], [LanguageName], [LanguageDescr]) VALUES (3, N'Java', N'Open source')
INSERT [dbo].[AE_Languages] ([LanguageID], [LanguageName], [LanguageDescr]) VALUES (4, N'PHP', N'Open Web')
INSERT [dbo].[AE_Languages] ([LanguageID], [LanguageName], [LanguageDescr]) VALUES (5, N'JavaScript', N'Client side')
INSERT [dbo].[AE_Languages] ([LanguageID], [LanguageName], [LanguageDescr]) VALUES (6, N'ASP', N'MS Web Page')
INSERT [dbo].[AE_Languages] ([LanguageID], [LanguageName], [LanguageDescr]) VALUES (7, N'Ruby', N'Web Japan')
INSERT [dbo].[AE_Languages] ([LanguageID], [LanguageName], [LanguageDescr]) VALUES (8, N'C/C++', N'Hardware Language')
INSERT [dbo].[AE_Languages] ([LanguageID], [LanguageName], [LanguageDescr]) VALUES (9, N'Android', N'Mobile')
SET IDENTITY_INSERT [dbo].[AE_Languages] OFF
