import { get, has, isString } from 'lodash';
import { HasuraException } from './exceptions';
import { ServerlessEvent } from './serverlesstypes';

export const formatJSONResponse = (
  response: Record<string, unknown>,
  statusCode = 200
) => {
  return {
    statusCode,
    body: JSON.stringify(response || {}),
  };
};

export const prepareHandler = (handler:any) => async (event:any) => {
  let requestInput = event.body;

  if (!has(event, 'body')) {
    requestInput = event;
  } else if (isString(requestInput)) {
    requestInput = JSON.parse(requestInput);
  }

  let response;

  try {
    response = await handler({ ...event, body: requestInput });

    if (!has(response, 'statusCode')) {
      return formatJSONResponse(response, 200);
    }
  } catch (error) {
    console.log(error);
    if (error instanceof HasuraException) {
      response = formatJSONResponse(
        {
          message: get(error, 'message'),
          extensions: get(error, 'extensions'),
        },
        400
      );
    } else if (has(error, 'response.data.message')) {
      response = formatJSONResponse(
        {
          message: get(error, 'response.data.message'),
          extensions: get(error, 'response.data.extensions'),
        },
        400
      );
    } else if (has(error, 'message')) {
      response = formatJSONResponse({ message: get(error, 'message') }, 400);
    } else {
      response = formatJSONResponse({ message: 'Internal System Error' }, 400);
    }
  }
  return response;
};

interface ActionHandlerConfig {
  isAuthenticated: boolean;
}

export const actionHandler = async (config: ActionHandlerConfig, handler:any) => {
  return prepareHandler(handler);
};
