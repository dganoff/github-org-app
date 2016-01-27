"use strict";

import angular from "angular";
import "angular-ui-router";

import GithubService from "./github";
import OrgRoutes from "./org.routes.js";
import RepoList from "./repo-list";
import Repository from "./repository";

const OrganizationModule = angular.module("app.organization", ["ui.router"]);

GithubService(OrganizationModule);
OrgRoutes(OrganizationModule);
RepoList(OrganizationModule);
Repository(OrganizationModule);

export default OrganizationModule;