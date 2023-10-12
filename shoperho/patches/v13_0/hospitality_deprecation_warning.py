import click


def execute():

	click.secho(
		"Hospitality domain is moved to a separate app and will be removed from ShoperHO in version-14.\n"
		"When upgrading to ShoperHO version-14, please install the app to continue using the Hospitality domain: https://github.com/netmanthan/hospitality",
		fg="yellow",
	)
