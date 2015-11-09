class Api::V1::ProjectsController < ApplicationController
  # before_action :authorize, only: [:]
  def index
    projects = Project.all
    render json: projects
  end

  def show
    project = Project.find(params[:id])
    render json: project
  end

  def create
    project = Project.create(project_params)
    render json: project
  end

  def update
    project = Project.find(params[:id])
    project.update(project_params)
    render json: project
  end

  def destroy
    Project.find(params[:id]).destroy
    render json: 'deleted'
  end

  private

  def project_params
    params.permit(:name, :description)
  end
end
