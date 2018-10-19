class PostsController < ApplicationController
  POSTS = [
    { id: 1, title: 'Account Page', body: 'Account details' },
    { id: 2, title: 'Contact Page', body: 'Contact detail' },
  ]

  def index
    @payload = { posts: POSTS }
    shared_respond_to
  end

  def show
    id = params[:id]
    post = POSTS.detect {|post| post[:id].to_s == id}
    @payload = { post: post }

    shared_respond_to
  end

  def new
    shared_respond_to
  end
end
