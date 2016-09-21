<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Language.aspx.cs" Inherits="AE_Web.Language" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <div ng-controller="LanguageController">
        
        <div class="row">
            <div class="form-group">
                <label class="control-label col-xs-2" for="languageSel">Programming Language</label>
                <select class="form-control col-xs-2"
                    id="languageSel"
                    ng-model="languageSel"
                    ng-options="language for language in languages">
                </select>
            </div>
        </div>
        

        Prefered Language is:  {{languageSel}}

        <div class="row">
            <div class="form-group">
                <label class="control-label col-xs-2" for="languageName">Language Name</label>
                <div class="col-xs-2">
                    <input class="form-control" type="text" id="languageName" ng-model="AE_Language.LanguageName" />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="form-group">
                <label class="control-label col-xs-2" for="languageDescr">Language Description</label>
                <div class="col-xs-2">
                    <input class="form-control" type="text" id="languageDescr" ng-model="AE_Language.LanguageDescr" />
                </div>
            </div>
        </div>

        <div class="row">
            <button type="button" class="btn-responsive btn btn-success col-xs-2" ng-click="create()">
                <span aria-hidden="true" class="glyphicon glyphicon-ok"></span> New Record
            </button>
        </div>
    </div>
</asp:Content>