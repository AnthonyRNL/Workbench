class Api::V1::StepsController < ApplicationController
  def index
    steps = Step.where(project_id: params[:project_id])
    render json: steps
  end

  def show

  end

  def create

  end

  def update

  end

  def delete

  end

end
