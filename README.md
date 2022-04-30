# move-to-the-edge

How to use Github Action to create or update your Azion Edge Function solution quick and easily, follow the steps below:

1. Fork this repository, use it as a template project
2. Clone your forked repository
3. Add your Azion Token using [Github secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository), create a new secret, the secret name must be __TOKEN__ (settings tab)
4. Edit "~/config.yaml" with desired configurarion variables according to https://github.com/azeight/azion-edge-functions#config
5. Edit your __JavaScript__ function in ["src/"](src) directory, with some coffee ☕️ ponies 🐎 and lollipops 🍭 .
6. Github action runs when you push to __main__ branch
7. Test your function using the URL returned at __"Github Action"__ step __*"Your output domain is"*__

More details on [Azion site](www.azion.com)
