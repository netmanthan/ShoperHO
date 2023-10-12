# Copyright (c) 2013, ShoperPrime Solutions and contributors
# For license information, please see license.txt


from shoper.selling.report.sales_analytics.sales_analytics import Analytics


def execute(filters=None):
	return Analytics(filters).run()
