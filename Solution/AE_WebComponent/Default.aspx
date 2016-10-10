<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="AE_WebComponent._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <div ng-controller="MainCtrl as ctrl">
  <b>Hero</b><br>
 <language-list language="ctrl.language"></language-list>
</div>
    
    
</asp:Content>
