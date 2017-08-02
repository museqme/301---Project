'use strict';

var app = app || {};

page('/strains', app.strainsController.index);
page('/about', app.aboutController.index);
page();
