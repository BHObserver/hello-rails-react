class MessagesController < ApplicationController
  def random
    message = Message.order('RANDOM()').first
    if message
      render json: { greeting: message.content }
    else
      render json: { error: 'No messages found' }, status: :not_found
    end
  end
end
