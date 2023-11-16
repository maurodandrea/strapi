import AWS from 'aws-sdk';

export default ({ env }: any) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          credentials: new AWS.ECSCredentials(),
          params: {
            Bucket: env('AWS_BUCKET'),
          },
        }
      },
    },
});