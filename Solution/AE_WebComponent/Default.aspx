<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="AE_WebComponent._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    
 <language-list></language-list>

   
    Click me: <input type="checkbox" ng-model="checked" aria-label="Toggle ngHide"><br/>
<div>
  Show:
  <div class="check-element animate-show" ng-show="checked">
    <span class="glyphicon glyphicon-thumbs-up"></span> I show up when your checkbox is checked.
  </div>
</div>
<div>
  Hide:
  <div class="check-element animate-show" ng-hide="checked">
    <span class="glyphicon glyphicon-thumbs-down"></span> I hide when your checkbox is checked.
  </div>
</div>


</asp:Content>
