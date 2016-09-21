<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Language.aspx.cs" Inherits="AE_Web.Language" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

    Hi
     <div ng-controller="LanguageController">
        <div ng-repeat="lang in testi">{{lang.LanguageID}}</div>
    </div>
</asp:Content>
