class Api::V1::UserProjectsController < ApplicationController

  def index
    if params[:user_id]
      userprojects = Project.joins(:user_projects).where("user_projects.user_id" => params[:user_id])
    else
      userprojects = User.joins(:user_projects).where("user_projects.project_id" => params[:project_id])
    end
    render json: userprojects
  end

  def create
    if user_signed_in?
      project_id = params[:project_id].to_i
      userproject = UserProject.create(user_id: session[:user_id], project_id: project_id)
      render json: userproject
    end
  end

  private

  def user_projects_params
    params.permit(:user_id, :project_id)
  end

end
