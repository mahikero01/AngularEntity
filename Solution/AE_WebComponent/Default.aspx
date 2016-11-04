<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="AE_WebComponent._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    
 <language-list></language-list>

   
<div ng-init="rico='12/31/2016'"></div>

  <test-animation init-test-anima="rico"></test-animation>



   <h1>Pagination </h1>

    <test-pagination></test-pagination>


</asp:Content>
