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
    # binding.pry
    project = Project.create(project_params)
    params[:materials].values.each do |pmat|
      if pmat[:material_id] == ""
        newMaterial = Material.create({name: pmat[:name], unit: pmat[:unit]})
        pmat[:material_id] = newMaterial[:id]
      end
      pmaterial = Pmaterial.create({project_id: project[:id], amount: pmat[:amount], material_id: pmat[:material_id]})
    end
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
    params.permit(:name, :description, :project_image)
  end

  def material_params
    params.permit(:name, :unit)
  end

  def pmaterial_params
    params.permit(:project_id, :amount, :material_id)
  end
end
