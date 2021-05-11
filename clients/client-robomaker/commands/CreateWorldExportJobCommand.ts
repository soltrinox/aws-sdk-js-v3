import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { CreateWorldExportJobRequest, CreateWorldExportJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateWorldExportJobCommand,
  serializeAws_restJson1CreateWorldExportJobCommand,
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

export interface CreateWorldExportJobCommandInput extends CreateWorldExportJobRequest {}
export interface CreateWorldExportJobCommandOutput extends CreateWorldExportJobResponse, __MetadataBearer {}

/**
 * <p>Creates a world export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateWorldExportJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateWorldExportJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateWorldExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorldExportJobCommandInput} for command's `input` shape.
 * @see {@link CreateWorldExportJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateWorldExportJobCommand extends $Command<
  CreateWorldExportJobCommandInput,
  CreateWorldExportJobCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateWorldExportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateWorldExportJobCommandInput, CreateWorldExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "CreateWorldExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWorldExportJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateWorldExportJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateWorldExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateWorldExportJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorldExportJobCommandOutput> {
    return deserializeAws_restJson1CreateWorldExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
