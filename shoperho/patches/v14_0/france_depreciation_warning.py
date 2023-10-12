import click
import frappe


def execute():
	if "shoperho_france" in frappe.get_installed_apps():
		return
	click.secho(
		"Feature for region France will be remove in version-15 and moved to a separate app\n"
		"Please install the app to continue using the regionnal France features: https://github.com/scopen-coop/shoperho_france.git",
		fg="yellow",
	)
