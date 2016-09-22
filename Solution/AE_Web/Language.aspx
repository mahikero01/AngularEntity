<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Language.aspx.cs" Inherits="AE_Web.Language" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <div ng-controller="LanguageController">
        
        <div class="row">
            <div class="form-group">
                <label class="control-label col-xs-2" for="ShowLanguageName">Programming Language</label>
                <select class="form-control col-xs-2"
                    id="ShowLanguageName"
                    
                    ng-options="Language for Language in Languages">
                </select>
            </div>
        </div>
        

        Prefered Language is:  {{}}

        <div class="row">
            <div class="form-group">
                <label class="control-label col-xs-2" for="CreateLanguageName">Language Name</label>
                <div class="col-xs-2">
                    <input class="form-control" type="text" id="CreateLanguageName" ng-model="Create.LanguageName" />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="form-group">
                <label class="control-label col-xs-2" for="CreateLanguageDescr">Language Description</label>
                <div class="col-xs-2">
                    <input class="form-control" type="text" id="CreateLanguageDescr" ng-model="Create.LanguageDescr" />
                </div>
            </div>
        </div>

        <div class="row">
            <button type="button" class="btn-responsive btn btn-success col-xs-2" ng-click="create()">
                <span aria-hidden="true" class="glyphicon glyphicon-ok"></span> New Record
            </button>
        </div>

        <br />

        <div class="row">
            <div class="form-group">
                <label class="control-label col-xs-2" for="SelectLanguageObj">Programming Language</label>
                <select class="form-control col-xs-2"
                    id="SelectLanguageObj"
                    ng-model="Select.LanguageObj"
                    rico="View.LanguageObject.LanguageName for View.LanguageObject in View.LanguageObjects track by View.LanguageObject.LanguageID">
                </select>
            </div>
        </div>

        Selected Language is:  {{}}
    </div>
</asp:Content>