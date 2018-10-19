class ApplicationController < ActionController::Base
  def shared_respond_to
    respond_to do |f|
      f.html { layout_with_react }
      f.json { json_response }
    end
  end

  def layout_with_react
    render html: nil, layout: true
  end

  def json_response
    render json: @payload
  end  
end
