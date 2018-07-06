/*
 * I put this PowerShell function into my profile in order to test my github pages locally thanks to a Docker container. 
 * This piece of code allow me to start easily the container.
 * I put it in this repo to remind me that.
 */


function ghpages{
	$dockerMachineActive = $(docker-machine active)
	$dockerMachineIP = $(docker-machine ip '$dockerMachineActive')
	docker run --rm --label=ghpages --volume=$(pwd):/usr/src/app -it -p $dockerMachineIP:4000:4000 starefossen/github-pages
} 