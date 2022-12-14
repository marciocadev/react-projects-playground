import { CodeSyntaxTS } from "../components/utils/code-syntax/CodeSyntaxTS";

export const CodeSyntaxExample = () => {
  const code = `import 'source-map-support/register';
import { 
  RDSDataClient,
  ExecuteStatementCommand,
  ExecuteStatementCommandInput } from '@aws-sdk/client-rds-data';
// eslint-disable-next-line import/no-extraneous-dependencies
import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { v4 as uuidv4 } from 'uuid';

const rdsClient = new RDSDataClient({ region: process.env.AWS_REGION });

export const handler = async(event: APIGatewayEvent)
  :Promise<APIGatewayProxyResult> => {
  console.log(JSON.stringify(event, undefined, 2));

  const { username, password, email } = JSON.parse(event.body!);

  const dt = Date.now() / 1000;
  console.log(dt);

  try {
    const sqlInsert = 'INSERT INTO accounts '
      + '(user_id, username, password, email, created_on) '
      + 'VALUES (:id, :user, :pw, :email, TO_TIMESTAMP(:dt))';
    const param: ExecuteStatementCommandInput = {
      resourceArn: process.env.CLUSTER_ARN,
      secretArn: process.env.SECRET_ARN,
      database: process.env.DB_NAME,
      sql: sqlInsert,
      parameters: [
        { name: 'id', typeHint: 'UUID', value: { stringValue: uuidv4() } },
        { name: 'user', value: { stringValue: username } },
        { name: 'pw', value: { stringValue: password } },
        { name: 'email', value: { stringValue: email } },
        { name: 'dt', value: { longValue: dt } },
      ],
    };

    await rdsClient.send(new ExecuteStatementCommand(param));
  } catch (err) {
    console.error(err);
  }

  return {
    statusCode: 200,
    body: 'ok',
  };
};`;

  return (
    <div className="codesyntax">

      <div className="container mx-auto my-auto pt-4 pb-4 pl-4 pr-4">
        <div className='flex'>
          <div className="mockup-window border bg-base-300 pb-4">
            <CodeSyntaxTS
              code={code}
              showLineNumbers={true}
              highlightLines={[2, 14, 15, 18, 22]}
              style={{
                paddingBottom: '1.25rem',
                paddingTop: '1.25rem', overflowX: 'auto',
              }}
            />
          </div>
        </div>
      </div>

    </div>
  );
}