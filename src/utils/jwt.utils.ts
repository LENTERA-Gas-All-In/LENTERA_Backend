import { JwtService } from '@nestjs/jwt';

export const signJwtToken = (payload: any, jwtService: JwtService): string => {
  return jwtService.sign(payload);
};

export const verifyJwtToken = (token: string, jwtService: JwtService): any => {
  return jwtService.verify(token);
};
