import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListImageRecipesRequest, ListImageRecipesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListImageRecipesCommand,
  serializeAws_restJson1ListImageRecipesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ListImageRecipesCommandInput extends ListImageRecipesRequest {}
export interface ListImageRecipesCommandOutput extends ListImageRecipesResponse, __MetadataBearer {}

/**
 * <p> Returns a list of image recipes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImageRecipesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImageRecipesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListImageRecipesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImageRecipesCommandInput} for command's `input` shape.
 * @see {@link ListImageRecipesCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListImageRecipesCommand extends $Command<
  ListImageRecipesCommandInput,
  ListImageRecipesCommandOutput,
  ImagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListImageRecipesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListImageRecipesCommandInput, ListImageRecipesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "ListImageRecipesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListImageRecipesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListImageRecipesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListImageRecipesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListImageRecipesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListImageRecipesCommandOutput> {
    return deserializeAws_restJson1ListImageRecipesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
