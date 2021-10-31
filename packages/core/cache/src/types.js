// @flow
import type {Readable} from 'stream';

export interface Cache {
  ensure(): Promise<void>;
  flush(): Promise<void>;

  has(key: string): Promise<boolean>;
  /** Deserializes the value */
  get<T>(key: string): Promise<?T>;
  /** Serializes the value */
  set(key: string, value: mixed): Promise<void>;
  /** Throws if not found */
  getStream(key: string): Readable;
  setStream(key: string, stream: Readable): Promise<void>;
  /** Throws if not found */
  getBlob(key: string): Promise<Buffer>;
  setBlob(key: string, contents: Buffer | string): Promise<void>;
  getBuffer(key: string): Promise<?Buffer>;
  setBlobs(entires: $ReadOnlyArray<[string, Buffer | string]>): Promise<void>;
}
