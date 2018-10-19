module ApplicationHelper
  def props(request)
    {
      location: request.fullpath
    }
  end
end
