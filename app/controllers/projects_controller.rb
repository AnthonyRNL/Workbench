class ProjectsController < ApplicationController
  def index
    if user_signed_in?
      @user = session[:user_id]
    end
  end

  private

  def project_params
    params.require(:project).permit(:id)
  end
end
