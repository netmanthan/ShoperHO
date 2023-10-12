// Copyright (c) 2016, ShoperPrime Solutions and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Applicant-Wise Loan Security Exposure"] = {
	"filters": [
		{
			"fieldname":"company",
			"label": __("Company"),
			"fieldtype": "Link",
			"options": "Company",
			"default": frappe.defaults.get_user_default("Company"),
			"reqd": 1
		}
	]
};
