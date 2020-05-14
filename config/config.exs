# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :blog_app,
  ecto_repos: [BlogApp.Repo]

# Configures the endpoint
config :blog_app, BlogAppWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "FR+GT4JCrlGn3/83xSh9n4H/BrJD0Kgts4FQrQCt02EFxKQlXl85aKfNBJCBLz4X",
  render_errors: [view: BlogAppWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: BlogApp.PubSub,
  live_view: [signing_salt: "yCqw9sOw"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
