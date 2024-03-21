Rails.application.routes.draw do
  get '/home', to: 'home#index', as: 'index'
  get '/compliments', to: 'home#compliments', as: 'compliments'
  get '/contact', to: 'home#contact', as: 'contact'
  get '/resume', to: 'home#resume', as: 'resume'
  get '/story', to: 'home#story', as: 'story'
  get '/work', to: 'home#work', as: 'work'
  root 'home#index'
end
