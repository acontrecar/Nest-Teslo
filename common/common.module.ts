import { Module } from '@nestjs/common';
import { ErrorHandleService } from './services/error-handle/error-handle.service';

@Module({
  providers: [ErrorHandleService],
  exports: [ErrorHandleService],
})
export class CommonModule {}
