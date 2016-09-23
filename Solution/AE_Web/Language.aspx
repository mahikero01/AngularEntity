<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Language.aspx.cs" Inherits="AE_Web.Language" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    
    <div ng-controller="LanguageController">
        
        <div class="row">
            <div class="form-group">
                <label class="control-label col-xs-2" for="ShowLanguageName">Programming Language</label>
                <select class="form-control col-xs-2"
                    id="ShowLanguageName"
                    ng-model="Show.LanguageName"
                    ng-options="Language for Language in LanguagePage.Languages">
                </select>
            </div>
        </div>
        
        
        Prefered Language is:  {{Show.LanguageName}}

        <div class="row">
            <div class="form-group">
                <label class="control-label col-xs-2" for="CreateLanguageName">Language Name</label>
                <div class="col-xs-2">
                    <input required class="form-control" type="text" id="CreateLanguageName" name="CreateLanguageName" ng-model="Create.LanguageName" />
                </div>
            </div>
        </div>

        Input is: {{AngularEntity.CreateLanguageName.$valid}}

        <div class="row">
            <div class="form-group">
                <label class="control-label col-xs-2" for="CreateLanguageDescr">Language Description</label>
                <div class="col-xs-2">
                    <input class="form-control" type="text" id="CreateLanguageDescr" name="CreateLanguageDescr" ng-model="Create.LanguageDescr" required/>
                </div>
            </div>
        </div>

        Input is: {{AngularEntity.CreateLanguageDescr.$valid}}

        <div class="row">
            <button type="button" class="btn-responsive btn btn-success col-xs-2" 
                ng-disabled="!AngularEntity.CreateLanguageName.$valid || !AngularEntity.CreateLanguageDescr.$valid"
                ng-click="AngularEntity.CreateLanguageName.$valid && AngularEntity.CreateLanguageDescr.$valid && create()">
                <span aria-hidden="true" class="glyphicon glyphicon-ok"></span> New Record
            </button>
        </div>
    
        <br />

        <br />
        <br />

        <br />
        <br />

        <br />
        <br />

        <br />
         <br />

        <br />
        <br />

        <br />
        <br />

        <br />
        <br />

        <br />
         <br />

        <br />
        <br />

        <br />
        <br />

        <br />
        <br />

        <br />
        <div class="row">
            <div class="form-group">
                <label class="control-label col-xs-2" for="SelectLanguageObj">Programming Language</label>
                <select class="form-control col-xs-2"
                    id="SelectLanguageObj"
                    ng-model="Show.LanguageObject"
                    ng-options="LanguageObject.LanguageName for LanguageObject in LanguagePage.LanguageObjects track by LanguageObject.LanguageID">
                </select>
            </div>
        </div>

        Selected Language is:  {{Show.LanguageObject.LanguageName}}

        
        <div class="row">
            <div class="form-group">
                <label class="control-label col-xs-2" for="EditLanguageName">Language Name</label>
                <div class="col-xs-2">
                    <input required class="form-control" type="text" id="EditLanguageName" name="EditLanguageName" ng-model="Show.LanguageObject.LanguageName" />
                </div>
            </div>
        </div>

        Input is: {{AngularEntity.EditLanguageName.$valid}}

        <div class="row">
            <div class="form-group">
                <label class="control-label col-xs-2" for="EditLanguageDescr">Language Description</label>
                <div class="col-xs-2">
                    <input class="form-control" type="text" id="EditLanguageDescr" name="EditLanguageDescr" ng-model="Show.LanguageObject.LanguageDescr" required/>
                </div>
            </div>
        </div>

        Input is: {{AngularEntity.EditLanguageDescr.$valid}}

        <div class="row">
            <button type="button" class="btn-responsive btn btn-success col-xs-2" 
                ng-disabled="!AngularEntity.EditLanguageName.$valid || !AngularEntity.EditLanguageDescr.$valid"
                ng-click="AngularEntity.EditLanguageName.$valid && AngularEntity.EditLanguageDescr.$valid && update()">
                <span aria-hidden="true" class="glyphicon glyphicon-ok"></span> Update Record
            </button>
        </div>                 
        
    </div>
    


    <br />
    <br />


            <div class="row">
            <div class="form-group">
                <label class="control-label col-xs-2" for="CreateLanguageDescr">Language Description</label>
                <div class="col-xs-2">
                    <input class="form-control" type="text" id="CreateLanguageDescr" name="CreateLanguageDescr" ng-model="Create.LanguageDescr" required/>
                </div>
            </div>
        </div>

        Input is: {{AngularEntity.CreateLanguageDescr.$valid}}

        <div class="row">
            <button type="button" class="btn-responsive btn btn-success col-xs-2" 
                ng-disabled="!AngularEntity.CreateLanguageName.$valid || !AngularEntity.CreateLanguageDescr.$valid"
                ng-click="AngularEntity.CreateLanguageName.$valid && AngularEntity.CreateLanguageDescr.$valid && create()">
                <span aria-hidden="true" class="glyphicon glyphicon-ok"></span> New Record
            </button>
        </div>
</asp:Content>