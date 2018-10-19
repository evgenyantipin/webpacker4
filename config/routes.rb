Rails.application.routes.draw do
  root 'posts#new'
  resources :posts, only: [:index, :show, :new]
end
