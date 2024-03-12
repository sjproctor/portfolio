Rails.application.routes.draw do
  get '/home', to: 'home#index', as: 'index'
  root 'home#index'
end
